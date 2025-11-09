// Jenkinsfile - Final Working Solution (Revert to V2)

node {
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all shell commands in one block.
        sh '''
            # CRITICAL FIX: Set the PATH to include all common locations for Docker.
            export PATH="/usr/bin:/usr/local/bin:/snap/bin:$PATH"
            
            echo "--- Stopping existing containers ---"
            # Use the official V2 command syntax: docker compose
            docker compose down

            echo "--- Building and Deploying New Images ---"
            docker compose up --build -d

            echo "--- Verification ---"
            docker ps
        '''
    }
}