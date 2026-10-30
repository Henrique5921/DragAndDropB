document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.kanban-card');
    const columns = document.querySelectorAll('.column-content');

    let draggedCard = null;

    // Configuração dos eventos nos cartões de tarefas
    cards.forEach(card => {
        card.addEventListener('dragstart', function() {
            draggedCard = this;
            setTimeout(() => this.classList.add('dragging'), 0);
        });

        card.addEventListener('dragend', function() {
            this.classList.remove('dragging');
            draggedCard = null;
        });
    });

    // Configuração das zonas de soltura (colunas)
    columns.forEach(column => {
        column.addEventListener('dragover', function(e) {
            // Permite que o elemento seja solto na coluna
            e.preventDefault(); 
        });

        column.addEventListener('dragenter', function(e) {
            e.preventDefault();
            this.classList.add('hovered');
        });

        column.addEventListener('dragleave', function() {
            this.classList.remove('hovered');
        });

        column.addEventListener('drop', function() {
            this.classList.remove('hovered');
            if (draggedCard) {
                // Move o cartão arrastado para a nova coluna
                this.appendChild(draggedCard);
            }
        });
    });
});