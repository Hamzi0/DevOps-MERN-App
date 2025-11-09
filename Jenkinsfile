// Jenkinsfile

pipeline {
    // CRUCIAL FIX: Use the docker/compose image as the agent. 
    // This container has the 'docker' and 'docker compose' commands installed.
    agent {
        docker { 
            image 'docker/compose:latest' 
            // This volume arg allows the agent container to control the host's Docker daemon.
            args '-v /var/run/docker.sock:/var/run/docker.sock' 
        }
    }
    
    // Define the environment variables
    environment {
        // USE YOUR ACTUAL REPOSITORY URL
        GIT_URL = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    }
    
    stages {
        // Stage 1: Checkout Code
        // The 'agent' block automatically performs a git checkout before the stages begin.
        // We ensure the code is fetched by adding a dedicated step here for clarity.
        stage('Checkout Code') {
            steps {
                echo 'Fetching latest code from GitHub...'
                // This command runs inside the docker agent
                git url: env.GIT_URL, branch: 'main'
            }
        }

        // Stage 2: Stop and Cleanup Old Deployment
        stage('Stop Existing Containers') {
            steps {
                echo 'Stopping existing application containers and removing resources...'
                // Command runs successfully inside the 'docker/compose' agent
                sh "docker compose down"
            }
        }
        
        // Stage 3: Build, Deploy, and Run
        stage('Build and Deploy Containers') {
            steps {
                echo 'Building new images and deploying services...'
                // --build forces the creation of fresh images with the latest code
                sh "docker compose up --build -d"
            }
        }
        
        // Stage 4: Verification
        stage('Verification') {
            steps {
                echo 'Deployment successful. Checking container status.'
                sh "docker ps"
            }
        }
    }
}