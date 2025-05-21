from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'Image file is required'}), 400

    image_file = request.files['image']
    save_path = os.path.join('uploads', image_file.filename)
    image_file.save(save_path)

    # Call your existing prediction pipeline
    result = subprocess.run(
        ['python3', 'predict.py', save_path],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        return jsonify({'error': result.stderr}), 500

    try:
        prediction = result.stdout
    except Exception:
        return jsonify({'error': 'Failed to parse prediction'}), 500

    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
