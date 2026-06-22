import os
import shutil

def organize_images(source_folder, target_folder):
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')
    
    os.makedirs(target_folder, exist_ok=True)
    
    image_names = ['factory_logs', 'factory_truck', 'factory_panorama', 'factory_forklift', 'factory_cargo']
    
    files = []
    for f in os.listdir(source_folder):
        if f.lower().endswith(image_extensions):
            files.append(f)
    
    files.sort()
    
    for i, filename in enumerate(files[:5]):
        src_path = os.path.join(source_folder, filename)
        ext = os.path.splitext(filename)[1].lower()
        dst_name = f"{image_names[i]}{ext}"
        dst_path = os.path.join(target_folder, dst_name)
        
        shutil.copy2(src_path, dst_path)
        print(f"✓ 已复制: {filename} -> {dst_name}")
    
    print(f"\n共处理 {min(len(files), 5)} 张图片")
    print(f"保存位置: {target_folder}")

if __name__ == "__main__":
    print("=" * 50)
    print("春诚木业官网 - 图片整理工具")
    print("=" * 50)
    print()
    print("请将您的厂房图片复制到一个文件夹中")
    print("然后输入该文件夹的路径：")
    print()
    
    source_folder = input("图片文件夹路径: ").strip()
    
    if not os.path.isdir(source_folder):
        print(f"错误: {source_folder} 不是有效文件夹")
        exit(1)
    
    target_folder = os.path.join(os.path.dirname(__file__), 'images')
    
    organize_images(source_folder, target_folder)
    
    print()
    print("=" * 50)
    print("图片整理完成！")
    print("=" * 50)