arrega uma imagem, identifica automaticamente os rostos presentes utilizando um classificador pré-treinado e destaca as regiões detectadas com retângulos.


---

🧠 Reflexão de Aprendizado

1. O que aprendi?

Aprendi conceitos introdutórios de Inteligência Artificial e Visão Computacional, utilizando modelos pré-treinados para reconhecimento de padrões em imagens. Também compreendi como manipular imagens com a biblioteca OpenCV, converter imagens para escala de cinza, utilizar classificadores Haar Cascade para detecção facial e desenhar marcações sobre objetos identificados. Além disso, pratiquei o uso do Python e do ambiente Google Colab para executar aplicações de IA.

2. Para que serve (Por que aprendi)?

A Inteligência Artificial pode automatizar tarefas que exigem análise de grandes volumes de dados, imagens ou textos. A detecção facial é utilizada em sistemas de segurança, autenticação biométrica, câmeras inteligentes, aplicativos de fotografia e monitoramento. Aprender esses conceitos permite desenvolver soluções capazes de reconhecer padrões e auxiliar na tomada de decisões de forma rápida e eficiente.


---

🛠️ Tecnologias e Ferramentas Utilizadas

Python

OpenCV

Google Colab

Haar Cascade Classifier

Biblioteca cv2



---

💻 Demonstração e Como Rodar

Código Relevante Comentado

import cv2
from google.colab.patches import cv2_imshow

# Carrega o modelo pré-treinado para detecção facial
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
)

# Lê a imagem
img = cv2.imread('oi.jpg')

# Converte para escala de cinza
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Detecta os rostos presentes na imagem
faces = face_cascade.detectMultiScale(gray, 1.1, 4)

# Desenha um retângulo ao redor de cada rosto encontrado
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)

# Exibe a imagem com as marcações
cv2_imshow(img)

Explicação:

CascadeClassifier() carrega um modelo treinado para detectar rostos.

imread() abre a imagem que será analisada.

cvtColor() converte a imagem para tons de cinza, facilitando a detecção.

detectMultiScale() identifica as regiões onde há rostos.

rectangle() desenha um retângulo ao redor dos rostos encontrados.

cv2_imshow() exibe o resultado diretamente no Google Colab.


Instruções para Executar

1. Instale a biblioteca OpenCV:



pip install opencv-python

2. Coloque a imagem oi.jpg na mesma pasta do script ou faça upload no Google Colab.


3. Execute o código Python:



python app.py

4. O programa analisará a imagem e exibirá os rostos detectados destacados por retângulos azuis.
