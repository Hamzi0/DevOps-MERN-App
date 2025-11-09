// Jenkinsfile - Final Scripted Pipeline

node {
    // Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        // Fetches code into the workspace
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all commands in a single shell block for speed and reliability.
        // The commands run directly on the Jenkins host/agent environment.
        sh '''
            echo "--- Stopping existing containers ---"
            # Remove the old running services gracefully
            docker compose down

            echo "--- Building and Deploying New Images ---"
            # Build and deploy the entire stack using the new code
            docker compose up --build -d

            echo "--- Verification ---"
            docker ps
        '''
    }
}