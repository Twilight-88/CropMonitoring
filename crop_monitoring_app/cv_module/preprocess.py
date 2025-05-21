# cv_module/preprocess.py
# preprocess.py — image denoising & blur check
import cv2
import sys
import numpy as np

def is_blurry(image_path, threshold=100):
    image = cv2.imread(image_path, 0)  # grayscale
    laplacian_var = cv2.Laplacian(image, cv2.CV_64F).var()
    return laplacian_var < threshold

def denoise_image(image_path, output_path):
    image = cv2.imread(image_path)
    denoised = cv2.fastNlMeansDenoisingColored(image, None, 10, 10, 7, 21)
    cv2.imwrite(output_path, denoised)

if __name__ == "__main__":
    input_path = sys.argv[1]
    output_path = sys.argv[2]

    if is_blurry(input_path):
        print("blurry")
        sys.exit(1)

    denoise_image(input_path, output_path)
    print("done")
