// Jenkinsfile - Scripted Pipeline Syntax

node {
    // 1. Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    def dockerImage = 'docker/compose:latest'

    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        // Ensure you checkout the code before using it
        git url: gitUrl, branch: 'main'
    }

    stage('Stop and Deploy') {
        // 2. Use the docker.image().inside block to run the commands in the right container environment
        docker.image(dockerImage).inside('-v /var/run/docker.sock:/var/run/docker.sock') {
            
            // This is the containerized environment where Docker commands work
            
            sh 'echo "Stopping existing application containers..."'
            sh "docker compose down" 
            
            sh 'echo "Building new images and deploying services..."'
            // Need to change directory into the workspace to find docker-compose.yml
            sh "cd /var/jenkins_home/workspace/MERN-Deployment-Pipeline && docker compose up --build -d"
            
            sh 'echo "Deployment successful. Checking container status."'
            sh "docker ps"
        }
    }
}