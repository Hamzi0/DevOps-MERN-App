// Jenkinsfile - Fixed and Future-Proof Version

node {
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git'
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        sh '''
            echo "--- Stopping existing containers ---"
            docker compose down

            echo "--- Building and Deploying New Images ---"
            docker compose up --build -d

            echo "--- Verification ---"
            docker ps
        '''
    }
}
