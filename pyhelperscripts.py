import os

# Caminho da pasta com os arquivos
pasta = './imgs/Monsters'
found_files = False
# Iterar pelos arquivos da pasta
for nome_arquivo in os.listdir(pasta):
    if nome_arquivo.endswith("_Portrait.png"):
        novo_nome = nome_arquivo.replace("_Portrait", "", 1)
        caminho_antigo = os.path.join(pasta, nome_arquivo)
        caminho_novo = os.path.join(pasta, novo_nome)
        os.rename(caminho_antigo, caminho_novo)
        print(f'Renomeado: {nome_arquivo} -> {novo_nome}')
        found_files = True
if(not found_files):
    print("Nenhum arquivo encontrado para renomear.")
