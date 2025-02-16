import CardConversation from './CardConversation';

function ListConversations() {
  return (
    <div className='aside-conversations'>

        <p className="p-title-conversations">CONVERSACIONES</p>
        
        <div className="aside-conversations-list">
          <CardConversation selected={"selected"}/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
          <CardConversation/>
        </div>

    </div>
  )
}

export default ListConversations