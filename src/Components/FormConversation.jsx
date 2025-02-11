import { PencilIcon, SendIcon } from '../Assets/Icons'

function FormConversation() {
  return (
    <form className='form-conversation'>
        <label>
            <PencilIcon color='#30994D'/>
            <input type="text" placeholder='Ask me something...'/>
            <button>
                <SendIcon color='#30994D'/>
                Enviar
            </button>
        </label>
    </form>
  )
}

export default FormConversation