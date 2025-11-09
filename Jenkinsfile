// Jenkinsfile - Final Working Solution (Pure Shell)

node {
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all shell commands in one block.
        sh '''
            echo "--- Stopping existing containers ---"
            # Using the official V2 syntax.
            docker compose down

            echo "--- Building and Deploying New Images ---"
            docker compose up --build -d

            echo "--- Verification ---"
            docker ps
        '''
    }
}