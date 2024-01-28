const swap = (array, pos1, pos2) => {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

const shuffle = (array, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        let pos1 = Math.floor(Math.random() * array.length);
        let pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

const bubble_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

const selection_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min_idx]) {
                min_idx = j;
            }
        }
        swap(array, min_idx, i);
    }
};

const particionamento = (array, inicio, fim, pivot) => {
    let pivotValue = array[pivot];
    swap(array, pivot, fim);
    let storeIndex = inicio;
    for (let i = inicio; i < fim; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, storeIndex);
            storeIndex++;
        }
    }
    swap(array, storeIndex, fim);
    return storeIndex;
};

const quick_sort = (array, inicio = 0, fim = array.length - 1) => {
    if (inicio < fim) {
        let pivot = Math.floor((inicio + fim) / 2);
        let newPivot = particionamento(array, inicio, fim, pivot);
        quick_sort(array, inicio, newPivot - 1);
        quick_sort(array, newPivot + 1, fim);
    }
};

