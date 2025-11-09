pipeline {
    agent any // Runs the job on a Jenkins executor node

    stages {
        // Stage 1: Checkout Code
        // NOTE: This stage is usually handled automatically by Jenkins if the job is configured as "Pipeline script from SCM"
        stage('Checkout') {
            steps {
                echo "Cloning repository from GitHub"
                // The correct way to checkout code using Jenkins Pipeline steps
                checkout scm 
            }
        }

        // Stage 2: Build and Start Deployment
        stage('Deploy Application') {
            steps {
                // The 'sh' commands execute within the current workspace directory.
                sh '''
                    echo "Stopping old services..."
                    /usr/bin/docker compose down 

                    echo "Building and starting new containers..."
                    // CRITICAL: --build ensures the new code is compiled into fresh images.
                    /usr/bin/docker compose up --build -d

                    echo "Deployment Complete. Verifying containers..."
                    /usr/bin/docker ps
                '''
            }
        }
    }
}