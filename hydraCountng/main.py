import argparse
import hydrastuff as h

def main():
  parser = argparse.ArgumentParser(description="Calculates number of chops for a hydra of length n")
  parser.add_argument("--length", "-l", help="length of initial hydra head", default="3")
  args = parser.parse_args()

  n = args.length
  print(h.chopSimpleHydraOfSize(int(n)))

main()