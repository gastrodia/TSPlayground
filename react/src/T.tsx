import * as React from 'react'
import * as ReactDOM from 'react-dom'

class HelloMessage extends React.Component<any,any>{
    
    state = {
        items:[
            {
                url: 'http://owenyang0.github.io/images/mocha.png',
                caption: 'Mocha'
            }
       ]
    } 
    
    constructor(props, context){      
        super(props, context);
       
        setInterval(()=>{
            this.state.items.push({
                url: 'http://owenyang0.github.io/images/mocha.png',
                caption: 'Mocha' + Math.random()
            })
            console.log(this.state.items)
            this.forceUpdate();
        },100)
    }
    

    

    
    render() {
        var photos = [];
        this.state.items.map(function(photo) {
                   photos.push(  <img src={photo.url} caption={photo.caption} key={photo.caption} />)
                 })
        return (
        <div className='photo-gallery'>
                {photos}
        </div>
        )
    }
}


ReactDOM.render(<HelloMessage name="John" />, document.getElementById('app'));
