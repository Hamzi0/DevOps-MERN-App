// Jenkinsfile - Final Working Solution (V1 Syntax)

node {
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        sh '''
            # CRITICAL FIX: Set the PATH to include all common locations for Docker.
            export PATH="/usr/bin:/usr/local/bin:/snap/bin:$PATH"
            
            echo "--- Stopping existing containers ---"
            # Use the more stable V1 command name
            docker-compose down

            echo "--- Building and Deploying New Images ---"
            docker-compose up --build -d

            echo "--- Verification ---"
            # Use the simple 'docker' command for universal checking
            docker ps
        '''
    }
}