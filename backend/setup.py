from setuptools import setup, find_packages

setup(
    name='srv',
    version='0.42',
    url='https://github.com/mypackage.git',
    author='Author Name',
    author_email='author@gmail.com',
    description='Description of my package',
    packages=find_packages(),
    install_requires=['flask'],
)
