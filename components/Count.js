import React,{useState}from 'react'
import {Button, Text,View,TextInput} from 'react-native'
import {useSelector , useDispatch} from 'react-redux'
import {reduxAction} from '../redux/action'
function Count() {
    const data= useSelector((state)=>state.wordArray);
    const [text, setText] = useState('');
    console.log("Items in Array")
    data.map(item=>console.log(item))


    const dispatch =useDispatch();
    return (
        
        <View>
            <TextInput  style={{height: 40}}
        placeholder="word"
        onChangeText={text => setText(text)}
        defaultValue={text}/>
            <Button title="Submit" onPress={()=>dispatch(reduxAction({visible:true,
    wordName : text,
    length :text.length,
    id:10}))}/>
    {data.map(item=>item.id === 10 ? <Text style={{fontSize:20}}>WordName : {item.wordName}, Id : {item.id}, length : {item.length}</Text>: null)}
            
            {/* <Text style={{fontSize:40}}>{data1}</Text>
            <Text style={{fontSize:40}}>{data2}</Text> */}
            {/* <Button title="DANIES" onPress={()=>dispatch(dan())}/> */}
        </View>
        
    )
}

export default Count