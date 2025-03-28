FROM python:3.10-slim

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

#RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

RUN python3 -m pip install --no-cache-dir --upgrade pip \
    && python3 -m pip install --no-cache-dir --upgrade -r /code/requirements.txt --no-warn-script-location

COPY . /code

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
