import shutil
import os

source_dir = r"C:\Users\17747\Desktop\jiangchong\桌面没啥用\llm"
target_dir = r"C:\Users\17747\Desktop\春诚木业官网\images"

photos = [
    ("0d808f6a855650f864805843c3e31085.jpg", "factory_panorama.jpg"),
    ("微信图片_20260414214031_38_3.jpg", "factory_logs.jpg"),
]

for src_name, dst_name in photos:
    src_path = os.path.join(source_dir, src_name)
    dst_path = os.path.join(target_dir, dst_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        print(f"已复制: {src_name} -> {dst_name}")
    else:
        print(f"未找到: {src_name}")

print("\n照片复制完成！")
