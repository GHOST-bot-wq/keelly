# PowerShell Script para sincronizar as 4 imagens oficiais no projeto Kelly Rezende | Divina Derma
$ErrorActionPreference = "Stop"

$sourceDir = "C:\Users\Win11\.gemini\antigravity\brain\95fcb9fa-63ac-435e-97d5-d30994bd4e99\.user_uploaded"
$destDirs = @(
    Join-Path $PSScriptRoot "public\images",
    Join-Path $PSScriptRoot "images",
    Join-Path $PSScriptRoot "dist\images",
    Join-Path $PSScriptRoot "dist\public\images"
)

Write-Host "Criando diretórios de imagens..." -ForegroundColor Cyan
foreach ($dest in $destDirs) {
    if (-not (Test-Path $dest)) {
        New-Item -ItemType Directory -Path $dest -Force | Out-Null
    }
}

$images = @{
    "media_1792192323572_e7639cb2.png" = "kelly-rezende-profissional.png"
    "media_1792192308681_dae71ad1.png" = "procedimento-limpeza-massagem.png"
    "media_1792192308694_dc190a34.png" = "protocolo-mascara-facial.png"
    "media_1792192308731_14fd13ee.png" = "tecnologia-cosmobeauty-led.png"
}

Write-Host "Copiando as 4 imagens oficiais..." -ForegroundColor Cyan
foreach ($img in $images.GetEnumerator()) {
    $srcFile = Join-Path $sourceDir $img.Key
    if (Test-Path $srcFile) {
        foreach ($dest in $destDirs) {
            $destFile = Join-Path $dest $img.Value
            Copy-Item -Path $srcFile -Destination $destFile -Force
            Write-Host "  -> Copiado: $($img.Value) para $dest" -ForegroundColor Green
        }
    } else {
        Write-Host "  [!] Arquivo de origem não encontrado: $srcFile" -ForegroundColor Yellow
    }
}

Write-Host "`nTodas as 4 imagens sincronizadas com sucesso em todos os diretórios!" -ForegroundColor Magenta
