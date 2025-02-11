
import FormConversation from './FormConversation'
import HeaderConversation from './HeaderConversation'
import MessagesConversation from './MessagesConversation'

function MainConversation() {
  return (
    <main>
      <HeaderConversation/>
      <MessagesConversation/>
      <FormConversation/>
    </main>
  )
}

export default MainConversation