from setuptools import setup, find_packages
import sys
import os.path


def load_requirements(filename='requirements.txt'):
    with open(filename) as f:
        lines = f.readlines()
    return lines


setup(
    name='srv',
    version='0.42',
    url='https://github.com/mypackage.git',
    author='Author Name',
    author_email='author@gmail.com',
    description='Description of my package',
    packages=find_packages(),
    install_requires=load_requirements(),
)
