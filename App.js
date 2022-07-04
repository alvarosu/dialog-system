'use-strict'

const btns = document.querySelectorAll('[data-modal="dialog"]')
if (btns) {
    btns.forEach(el_btn => {
        el_btn.addEventListener('click', e => {
            dialog(e.target.getAttribute('data-type'), e.target.getAttribute('data-title'), e.target.getAttribute('data-text'))
        })
    })
}

const dialog = (type = '', title = '', text = '') => {
    if (type != '' && title != '' && text != '') {
        const dialogComponent = document.querySelector('#dialog-component')

        dialogComponent.setAttribute('data-type', type)
        dialogComponent.querySelector('#dialog-title').innerText = title
        dialogComponent.querySelector('#dialog-text').innerText = text

        if (dialogComponent.querySelector('.dialog-buttons.' + type)) dialogComponent.querySelector('.dialog-buttons.' + type).classList.add('active')

        dialogComponent.classList.add('dialog_component-isopened')
        dialogComponent.classList.add('dialog_component-isopening')

        setTimeout(() => {
            dialogComponent.classList.remove('dialog_component-isopening')
        }, 210)
    }
}

const dialogClose = () => {
    const dialogComponent = document.querySelector('#dialog-component')

    dialogComponent.classList.add('dialog_component-isclosing')
    setTimeout(() => {
        dialogComponent.classList.remove('dialog_component-isopened')
        dialogComponent.classList.remove('dialog_component-isclosing')


        dialogComponent.setAttribute('data-type', '')
        dialogComponent.querySelector('#dialog-title').innerText = ''
        dialogComponent.querySelector('#dialog-text').innerText = ''

        const btns = dialogComponent.querySelectorAll('.dialog-buttons')
        if (btns) {
            btns.forEach(el => {
                el.classList.remove('active')
            })
        }
    }, 360)
}

const close = document.querySelector('#dialog-close')
if (close) {
    close.addEventListener('click', e => {
        dialogClose()
    })
}