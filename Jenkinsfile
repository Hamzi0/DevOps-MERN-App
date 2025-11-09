// Jenkinsfile - Final Working Solution (Explicit Path & V2 Syntax)

node {
    // Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all shell commands in one block.
        sh '''
            echo "--- Stopping existing containers ---"
            # Use the verified absolute path for the Docker binary and the V2 command
            /usr/bin/docker compose down

            echo "--- Building and Deploying New Images ---"
            # Use the verified absolute path
            /usr/bin/docker compose up --build -d

            echo "--- Verification ---"
            /usr/bin/docker ps
        '''
    }
}