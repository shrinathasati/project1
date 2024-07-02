from flask import Flask,response
import CORS

app=flask(__name__):

@app.route('/form',methods=['POST'])
def form():
    user=response.data
    print(user)

if __name__=='__main__':
    app.run