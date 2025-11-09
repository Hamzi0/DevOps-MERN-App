// Jenkinsfile

pipeline {
    agent any
    
    // Define the environment variables
    environment {
        // Define the name of your GitHub repository URL (USE YOUR ACTUAL URL)
        GIT_URL = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    }
    
    stages {
        // ... (Checkout Code stage remains the same) ...
        
        stage('Stop Existing Containers') {
            steps {
                echo 'Stopping existing application containers...'
                // REMOVED 'sudo'
                sh "docker compose down"
            }
        }
        
        stage('Build and Deploy Containers') {
            steps {
                echo 'Building and deploying new containers...'
                // REMOVED 'sudo'
                sh "docker compose up --build -d"
            }
        }
        
        stage('Verification') {
            steps {
                echo 'Application deployed successfully. Verify containers are running.'
                // REMOVED 'sudo'
                sh "docker ps"
            }
        }
    }
}