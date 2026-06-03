import { ArticleFull } from './ArticleFull';

const meta = {
  component: ArticleFull,
};

export default meta;

export const Default = {
  args: {
    backgroundColor: "#733bb3",
    size: "medium",

    article: {
      "title": "a very imprtant title",
      "abstract": "a very intersting summary of the paper",
      "author": "dummy",
      "keywords": ["abcd", "bcdef", "dgfdgd"],
      "score": 0.9888
    }
  }
};