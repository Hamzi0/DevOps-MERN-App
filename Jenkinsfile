// Jenkinsfile

pipeline {
    agent any
    
    // Define the environment variables
    environment {
        // Define the name of your GitHub repository URL (USE YOUR ACTUAL URL)
        GIT_URL = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from GitHub...'
                // Fetch code from the repository
                git url: env.GIT_URL, branch: 'main'
            }
        }
        
        stage('Stop Existing Containers') {
            steps {
                echo 'Stopping existing application containers...'
                // Command to gracefully stop and remove all services defined in docker-compose.yml
                // This ensures we can rebuild and restart cleanly.
                sh "sudo docker compose down"
            }
        }
        
        stage('Build and Deploy Containers') {
            steps {
                echo 'Building and deploying new containers...'
                // --build forces a rebuild using the latest code fetched from GitHub
                // -d runs the services in detached mode
                sh "sudo docker compose up --build -d"
            }
        }
        
        stage('Verification') {
            steps {
                echo 'Application deployed successfully. Verify containers are running.'
                sh "sudo docker ps"
            }
        }
    }
}