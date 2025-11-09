// Jenkinsfile

pipeline {
    // FIX 1: Change agent back to 'any' to fix syntax error
    agent any 
    
    // Define the environment variables
    environment {
        // USE YOUR ACTUAL REPOSITORY URL
        GIT_URL = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Fetching latest code from GitHub...'
                // This ensures the code is locally available in the Jenkins workspace
                git url: env.GIT_URL, branch: 'main' 
            }
        }

        // FIX 2: Use the 'docker.withRegistry' context to run commands inside the docker/compose container
        stage('Stop and Deploy') {
            steps {
                // IMPORTANT: We combine Stop, Deploy, and Verify into one steps block
                // and run it inside the docker/compose container.
                docker.image('docker/compose:latest').inside {
                    sh 'echo "Stopping existing application containers..."'
                    // This command runs inside the container with access to the host's Docker socket
                    sh "docker compose down" 
                    
                    sh 'echo "Building new images and deploying services..."'
                    sh "docker compose up --build -d"
                    
                    sh 'echo "Deployment successful. Checking container status."'
                    sh "docker ps"
                }
            }
        }
    }
}