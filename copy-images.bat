@echo off
chcp 65001 >nul
title Sincronizador de Imagens — Kelly Rezende ^| Divina Derma

echo =======================================================================
echo   SINCRONIZAÇÃO DAS 4 IMAGENS OFICIAIS — KELLY REZENDE ^| DIVINA DERMA
echo =======================================================================
echo.

set SCRIPT_DIR=%~dp0
set SOURCE_DIR=C:\Users\Win11\.gemini\antigravity\brain\95fcb9fa-63ac-435e-97d5-d30994bd4e99\.user_uploaded

if not exist "%SOURCE_DIR%" (
    echo [ERRO] Pasta de origem não encontrada:
    echo %SOURCE_DIR%
    echo.
    pause
    exit /b 1
)

echo [1/3] Criando pastas de destino 'images', 'public\images' e 'dist\images'...
if not exist "%SCRIPT_DIR%public\images" mkdir "%SCRIPT_DIR%public\images"
if not exist "%SCRIPT_DIR%images" mkdir "%SCRIPT_DIR%images"
if not exist "%SCRIPT_DIR%dist\images" mkdir "%SCRIPT_DIR%dist\images"
if not exist "%SCRIPT_DIR%dist\public\images" mkdir "%SCRIPT_DIR%dist\public\images"

echo [2/3] Copiando as 4 imagens oficiais fornecidas para todas as pastas de distribuição...
echo.

echo   - [1/4] Foto profissional de Kelly Rezende...
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%SCRIPT_DIR%public\images\kelly-rezende-profissional.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%SCRIPT_DIR%images\kelly-rezende-profissional.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%SCRIPT_DIR%dist\images\kelly-rezende-profissional.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%SCRIPT_DIR%dist\public\images\kelly-rezende-profissional.png" >nul

echo   - [2/4] Foto do procedimento de higienização e massagem...
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%SCRIPT_DIR%public\images\procedimento-limpeza-massagem.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%SCRIPT_DIR%images\procedimento-limpeza-massagem.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%SCRIPT_DIR%dist\images\procedimento-limpeza-massagem.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%SCRIPT_DIR%dist\public\images\procedimento-limpeza-massagem.png" >nul

echo   - [3/4] Foto do protocolo de máscara facial e repouso...
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%SCRIPT_DIR%public\images\protocolo-mascara-facial.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%SCRIPT_DIR%images\protocolo-mascara-facial.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%SCRIPT_DIR%dist\images\protocolo-mascara-facial.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%SCRIPT_DIR%dist\public\images\protocolo-mascara-facial.png" >nul

echo   - [4/4] Foto de tecnologia LED e peeling de peptídeos Cosmobeauty...
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%SCRIPT_DIR%public\images\tecnologia-cosmobeauty-led.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%SCRIPT_DIR%images\tecnologia-cosmobeauty-led.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%SCRIPT_DIR%dist\images\tecnologia-cosmobeauty-led.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%SCRIPT_DIR%dist\public\images\tecnologia-cosmobeauty-led.png" >nul

echo.
echo [3/3] SUCESSO ABSOLUTO!
echo As 4 imagens foram sincronizadas em:
echo   - %SCRIPT_DIR%images\
echo   - %SCRIPT_DIR%public\images\
echo   - %SCRIPT_DIR%dist\images\
echo   - %SCRIPT_DIR%dist\public\images\
echo.
echo Agora o projeto está 100%% pronto para visualização local e deploy na Vercel!
echo =======================================================================
echo.
pause
