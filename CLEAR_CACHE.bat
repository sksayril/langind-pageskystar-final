@echo off
echo.
echo ================================
echo  Clearing Next.js Cache
echo ================================
echo.

echo Removing .next folder...
if exist .next (
    rmdir /s /q .next
    echo ✓ .next folder removed
) else (
    echo ✓ .next folder doesn't exist
)

echo.
echo Removing node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo ✓ node_modules removed
) else (
    echo ✓ node_modules doesn't exist
)

echo.
echo Removing package-lock.json...
if exist package-lock.json (
    del package-lock.json
    echo ✓ package-lock.json removed
) else (
    echo ✓ package-lock.json doesn't exist
)

echo.
echo ================================
echo Installing dependencies...
echo ================================
echo.
call npm install

echo.
echo ================================
echo  ✓ All Done!
echo ================================
echo.
echo Now run: npm run dev
echo.
pause




