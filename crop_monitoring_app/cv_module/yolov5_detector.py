# cv_module/yolov5_detector.py
# yolov5_detector.py — YOLOv8 detection stub (you can replace yolov5 with yolov8 accordingly)
import sys
import json
from pathlib import Path

def detect(image_path):
    # This is a stub - replace with actual YOLOv8 detection code
    # Example return format:
    return {
        "detections": [
            {"label": "aphids", "confidence": 0.92},
            {"label": "powdery_mildew", "confidence": 0.85}
        ]
    }

if __name__ == "__main__":
    image_path = sys.argv[1]
    results = detect(image_path)
    print(json.dumps(results))
