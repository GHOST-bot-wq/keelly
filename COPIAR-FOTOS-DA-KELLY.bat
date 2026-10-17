@echo off
chcp 65001 >nul
title Sincronizador de Fotos Oficiais — Kelly Rezende ^| Divina Derma

echo =======================================================================
echo   SINCRONIZADOR DE FOTOS OFICIAIS — KELLY REZENDE ^| DIVINA DERMA
echo =======================================================================
echo.

set SCRIPT_DIR=%~dp0
set SRC1=C:\Users\Win11\.gemini\antigravity\brain\95fcb9fa-63ac-435e-97d5-d30994bd4e99\.user_uploaded
set SRC2=C:\Users\Win11\.gemini\antigravity\brain\c98dabe4-b2a2-4907-a3eb-2e65c2df113c\.user_uploaded

set SOURCE_DIR=
if exist "%SRC1%\media_1792192323572_e7639cb2.png" set SOURCE_DIR=%SRC1%
if exist "%SRC2%\media_1792192323572_e7639cb2.png" set SOURCE_DIR=%SRC2%

if "%SOURCE_DIR%"=="" (
    echo [AVISO] Procurando fotos na pasta da sessao...
    if exist "%SRC1%" (
        set SOURCE_DIR=%SRC1%
    ) else (
        echo [ERRO] Nao foi possivel localizar a pasta de uploads original.
        echo %SRC1%
        pause
        exit /b 1
    )
)

echo [1/3] Criando pastas 'images', 'public\images' e 'dist\images'...
if not exist "%SCRIPT_DIR%images" mkdir "%SCRIPT_DIR%images"
if not exist "%SCRIPT_DIR%public\images" mkdir "%SCRIPT_DIR%public\images"
if not exist "%SCRIPT_DIR%dist\images" mkdir "%SCRIPT_DIR%dist\images"

echo [2/3] Copiando as 4 fotos oficiais para dentro do projeto...
echo.

echo   - [1/4] kelly-rezende-profissional.png...
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%SCRIPT_DIR%images\kelly-rezende-profissional.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%SCRIPT_DIR%public\images\kelly-rezende-profissional.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%SCRIPT_DIR%dist\images\kelly-rezende-profissional.png" >nul

echo   - [2/4] procedimento-limpeza-massagem.png...
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%SCRIPT_DIR%images\procedimento-limpeza-massagem.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%SCRIPT_DIR%public\images\procedimento-limpeza-massagem.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%SCRIPT_DIR%dist\images\procedimento-limpeza-massagem.png" >nul

echo   - [3/4] protocolo-mascara-facial.png...
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%SCRIPT_DIR%images\protocolo-mascara-facial.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%SCRIPT_DIR%public\images\protocolo-mascara-facial.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%SCRIPT_DIR%dist\images\protocolo-mascara-facial.png" >nul

echo   - [4/4] tecnologia-cosmobeauty-led.png...
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%SCRIPT_DIR%images\tecnologia-cosmobeauty-led.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%SCRIPT_DIR%public\images\tecnologia-cosmobeauty-led.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%SCRIPT_DIR%dist\images\tecnologia-cosmobeauty-led.png" >nul

echo.
echo [3/3] Atualizando build de producao...
where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    node "%SCRIPT_DIR%build.js"
)

echo.
echo =======================================================================
echo   SUCESSO! AS 4 IMAGENS ESTAO SALVAS DENTRO DO PROJETO:
echo   - %SCRIPT_DIR%images\
echo   - %SCRIPT_DIR%public\images\
echo   - %SCRIPT_DIR%dist\images\
echo.
echo   Agora, quando voce fizer upload do projeto para a Vercel, Netlify
echo   ou GitHub, as imagens serao enviadas juntas e exibidas perfeitamente!
echo.
echo   Se o site estiver aberto no navegador, basta recarregar (F5).
echo =======================================================================
echo.
pause
