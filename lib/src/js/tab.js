export default function(newsTab) {
    newsTab.onclick = e => {
        const tab = e.target.closest('.button');
        let [tabs, elements] = this;

        tabs.forEach(newsTab => {
            newsTab !== tab
            ? newsTab.classList.remove('open') : 
            tab.classList.add('open')
        })
        
        elements.forEach(article => {

            if (article.dataset.tab === tab.dataset.tab) {
                article.classList.add('open');
            } else {
                article.classList.remove('open');
            }

        })
    }
}