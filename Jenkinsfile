// Jenkinsfile - Final Working Solution (V1 Syntax)

node {
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all shell commands in one block.
        sh '''
            # Since the host is fixed, the V1 command should now be found.
            
            echo "--- Stopping existing containers ---"
            docker-compose down

            echo "--- Building and Deploying New Images ---"
            docker-compose up --build -d

            echo "--- Verification ---"
            docker ps
        '''
    }
}