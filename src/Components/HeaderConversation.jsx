import { SearchIcon, ChatIcon, TrashIcon, PaperIcon, FolderIcon } from '../Assets/Icons';

function HeaderConversation() {
  return (
    <header className='conversation-header'>
        <div className='conversation-header__nav'>

            <div className="conversation-header__title">
                <ChatIcon/>
                <p>Explore the Universe</p>
            </div>

            <div className="conversation-header__icons">
                <SearchIcon/>
                <FolderIcon/>
                <PaperIcon/>
                <TrashIcon/>
            </div>

        </div>
    </header>
  )
}

export default HeaderConversation