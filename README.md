# Vale Verde — Fazenda Pixel

Jogo de fazenda 2D pixel art, compatível com computador e celular.

## Versão web instalável (PWA)
Hospede os arquivos deste repositório em HTTPS. No Chrome, abra o endereço e escolha **Instalar app** ou **Adicionar à tela inicial**.

## Aplicativo Android (APK)
O projeto usa Capacitor para empacotar os mesmos arquivos web.
- O workflow em `.github/workflows/build-android.yml` compila automaticamente um APK de teste.
- No GitHub, abra **Actions**, selecione **Build Android APK** e baixe o artefato `vale-verde-android-apk` ao terminar.
- Para atualizar os arquivos web no Android, execute `npm run android:sync`.

O APK gerado pelo workflow é uma versão debug para instalação e testes.