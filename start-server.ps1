Write-Host "========================================"
Write-Host "   KOPESHA LOAN SERVER" -ForegroundColor Yellow
Write-Host "========================================"
Write-Host ""
Write-Host "Starting server on: http://localhost:4000" -ForegroundColor Green
Write-Host ""
Write-Host "TO VIEW IN CHROME:" -ForegroundColor Cyan
Write-Host "1. Open Chrome browser" -ForegroundColor White
Write-Host "2. Type in address bar: localhost:4000" -ForegroundColor White  
Write-Host "3. Press Enter" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop server" -ForegroundColor Red
Write-Host "========================================"
Write-Host ""

# Start the server
node backend/server.js