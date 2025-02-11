import { SearchIcon, ChatIcon, TrashIcon, PaperIcon, FolderIcon } from '../Assets/Icons';

function HeaderConversation() {
  return (
    <header className='header-conversation'>
        <div className='header-conversation-nav'>

            <div className="header-nav-title">
                <ChatIcon/>
                <p>Explore the Universe</p>
            </div>

            <div className="header-nav-icons">
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