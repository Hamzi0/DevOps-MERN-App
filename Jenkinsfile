// Jenkinsfile

pipeline {
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

        stage('Stop and Deploy') {
            steps {
                // CRUCIAL FIX: Wrap the docker logic in a 'script' block
                script {
                    docker.image('docker/compose:latest').inside {
                        sh 'echo "Stopping existing application containers..."'
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
}