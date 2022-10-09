export default function(newsTab) {
    newsTab.onclick = ({ target }) => {
        const tab = target.closest('.button');

        // В контекст встраивается массив с табами и секциями
        let [tabs, sections] = this;

        tabs.forEach(newsTab => {
            newsTab !== tab
            ? newsTab.classList.remove('open') : 
            tab.classList.add('open')
        })
        
        sections.forEach(section => {
            section.dataset.tab === tab.dataset.tab ? 
            section.classList.add('open') :
            section.classList.remove('open');
        })
    }
}