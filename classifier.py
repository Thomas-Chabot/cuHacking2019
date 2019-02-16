import collections

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from IPython.core.display import display
from tqdm import tqdm

# Class labels
list_classes = ["toxic", "severe_toxic", "obscene", "threat", "insult", "identity_hate"]

# Read the data
toxicWordsTrain = pd.read_csv("data/train.csv")
toxicWordsTest = pd.read_csv("data/test.csv")

y_train = toxicWordsTrain[list_classes].values
x_train = toxicWordsTrain["comment_text"]
x_test = toxicWordsTest["comment_text"]

submission = pd.read_csv('data/sample_submission.csv')

colors_list = ["brownish green", "pine green", "ugly purple", "blood", "deep blue", "brown", "azure"]

palette = sns.xkcd_palette(colors_list)

x = toxicWordsTrain.iloc[:, 2:].sum()
plt.figure(figsize=(9, 6))
ax = sns.barplot(x.index, x.values, palette=palette)
plt.title("Class")
plt.ylabel('Occurrences', fontsize=12)
plt.xlabel('Type')
rects = ax.patches
labels = x.values
for rect, label in zip(rects, labels):
    height = rect.get_height()
    ax.text(rect.get_x() + rect.get_width() / 2, height + 10, label,
            ha='center', va='bottom')

display(plt.show())

# Sample from dataset
for sample_i in range(3):
    print('Comment #{}:  {}'.format(sample_i + 1, x_train[sample_i]))
    print('Label #{}:    {}'.format(sample_i + 1, y_train[sample_i]))

# Explore vocabulary
word_counter = collections.Counter([word for sentence in tqdm(x_train, total=len(x_train)) \
                                    for word in sentence.split()])

print('{} words.'.format(len([word for sentence in x_train for word in sentence.split()])))
print('{} unique words.'.format(len(word_counter)))
print('10 Most common words in the dataset:')
print('"' + '" "'.join(list(zip(*word_counter.most_common(10)))[0]) + '"')
