pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        deleteDir()
        git branch: 'main', url: 'https://github.com/Hamzi0/DevOps-MERN-App.git'
      }
    }

    stage('Build and Deploy') {
      steps {
        script {
          docker.withServer('unix:///var/run/docker.sock') {
            echo "--- Stopping existing containers ---"
            sh 'docker compose down'

            echo "--- Building and Deploying New Images ---"
            sh 'docker compose up --build -d'

            echo "--- Verification ---"
            sh 'docker ps'
          }
        }
      }
    }
  }
}
