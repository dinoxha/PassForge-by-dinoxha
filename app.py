import webview
import os

# Путь к твоему HTML-файлу
html_file_path = os.path.join(os.path.dirname(__file__), 'index.html')

def run_app():
    # Запуск веб-приложения с использованием pywebview
    webview.create_window('Зашифруй свой пароль', html_file_path, width=800, height=800)
    webview.start()

if __name__ == '__main__':
    run_app()
