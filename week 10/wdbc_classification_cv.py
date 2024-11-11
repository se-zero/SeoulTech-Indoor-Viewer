import numpy as np
from sklearn import (datasets, tree, model_selection)
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier


if __name__ == '__main__':
    # Load a dataset
    wdbc = datasets.load_breast_cancer()

    # Train a model
    model = XGBClassifier(
    n_estimators=250,      
    learning_rate=0.1,     
    max_depth=4,           
    random_state=50,       
    eval_metric='logloss'  
) # TODO
    cv_results = model_selection.cross_validate(model, wdbc.data, wdbc.target, cv=5, return_train_score=True)

    # Evaluate the model
    acc_train = np.mean(cv_results['train_score'])
    acc_test = np.mean(cv_results['test_score'])
    print(f'* Accuracy @ training data: {acc_train:.3f}')
    print(f'* Accuracy @ test data: {acc_test:.3f}')
    print(f'* Your score: {max(10 + 100 * (acc_test - 0.9), 0):.0f}')