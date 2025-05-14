[Setup]
AppName=PassForge by Dinoxha
AppVersion=1.0
DefaultDirName={pf}\PassForge
DefaultGroupName=PassForge
OutputDir=.
OutputBaseFilename=PassForgeInstaller
Compression=lzma
SolidCompression=yes

[Files]
Source: "app\*"; DestDir: "{app}\app"; Flags: recursesubdirs
Source: "source code\*"; DestDir: "{app}\source"; Flags: recursesubdirs

[Icons]
Name: "{group}\PassForge"; Filename: "{app}\app\app.exe"
Name: "{group}\Uninstall PassForge"; Filename: "{uninstallexe}"

[Run]
Filename: "{app}\app\app.exe"; Description: "Запустить PassForge"; Flags: nowait postinstall skipifsilent
