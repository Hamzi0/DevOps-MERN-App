// Jenkinsfile - The Ultimate Final Working Script

node {
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    def helperImage = 'docker/compose:latest' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        sh """
            # FINAL GUARANTEED FIX: Use the full, confirmed path to launch the helper container.
            # This bypasses the shell's PATH environment block.
            /usr/bin/docker run --rm \\
                -v /var/run/docker.sock:/var/run/docker.sock \\
                -v \$(pwd):/app \\
                -w /app \\
                ${helperImage} \\
                sh -c "
                    echo '--- Stopping existing containers ---'
                    # The commands run in the clean helper container environment
                    docker compose down

                    echo '--- Building and Deploying New Images ---'
                    docker compose up --build -d

                    echo '--- Verification ---'
                    docker ps
                "
        """
    }
}