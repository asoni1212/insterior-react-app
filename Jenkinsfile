pipeline {
  agent any

 tools{nodejs 'nodejs'}
stages {
          stage('Clone') {
            steps {
                git branch: 'release/qa' ,credentialsId:  "github-jenkins-1", url: 'https://github.com/asoni1212/agribooktech-frontend.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --legacy-peer-deps'
                sh 'npm install -g less'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'cp -r dist/* /var/www/platformown/qaclient/'
            }
        }
    }
}
