pipeline {
  agent any

 tools{nodejs 'nodejs'}
stages {
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
