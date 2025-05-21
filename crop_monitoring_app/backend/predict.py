import sys
import os
import subprocess
import json

def run_preprocessing(image_path):
    denoised_path = image_path.replace(".jpg", "_denoised.jpg")
    result = subprocess.run(
        ["python3", "cv_module/preprocess.py", image_path, denoised_path],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        return None, "Image is blurry or preprocessing failed"
    return denoised_path, None

def run_detection(image_path):
    result = subprocess.run(
        ["python3", "cv_module/yolov5_detector.py", image_path],
        capture_output=True,
        text=True
    )
    try:
        return json.loads(result.stdout), None
    except Exception as e:
        return None, str(e)

if __name__ == "__main__":
    image_path = sys.argv[1]

    preprocessed_path, error = run_preprocessing(image_path)
    if error:
        print(json.dumps({"error": error}))
        sys.exit(1)

    detections, error = run_detection(preprocessed_path)
    if error:
        print(json.dumps({"error": error}))
        sys.exit(1)

    print(json.dumps(detections))
