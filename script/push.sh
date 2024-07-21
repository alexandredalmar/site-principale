echo "Entrez le message de commit :"
read commit_message

# Exécuter les commandes avec le message de commit fourni
prettier . --write
git add .
git commit -m "$commit_message"
git checkout main
git pull origin main
git merge vince
git push origin main
git checkout vince